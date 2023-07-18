#!/bin/bash

IMAGE="$REPOSITORY_URI:$CODEBUILD_BUILD_NUMBER"
PREVIOUS_TASK_DEF=$(aws ecs describe-task-definition --region $ECS_REGION --task-definition $ECS_TASK_DEFINITION_NAME)
NEW_CONTAINER_DEF=$(echo $PREVIOUS_TASK_DEF | python -c "
import sys, json
definition = json.load(sys.stdin)['taskDefinition']['containerDefinitions']
definition[0]['image'] = '$IMAGE'
print(json.dumps(definition))
")

echo $NEW_CONTAINER_DEF

aws ecs register-task-definition \
--region $ECS_REGION \
--family $ECS_TASK_DEFINITION_NAME \
--container-definitions "${NEW_CONTAINER_DEF}" \
--network-mode awsvpc \
--memory $ECS_TASK_MEMORY \
--cpu $ECS_TASK_CPU \
--requires-compatibilities FARGATE \
--task-role-arn $ECS_TASK_ROLE \
--execution-role-arn $ECS_EXE_ROLE

aws ecs update-service \
--region $ECS_REGION \
--cluster $ECS_CLUSTER_NAME \
--service $ECS_SERVICE_NAME \
--task-definition $ECS_TASK_DEFINITION_NAME