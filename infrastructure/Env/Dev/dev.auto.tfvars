# App Variables
environment = "dev"
app_name    = "gb-app-1"
app_version = "0.0.1"
region      = "ap-south-1"

# Database Variables
database_name            = "nestjssingledockerappdb"
database_master_username = "postgres"
database_master_password = "master.123"
database_port            = "5432"

# Database Bastion Host Variables
bastion_host_key_pair_name = "nestjs-single-docker-app-test-keypair"

# ECS Task Definition Variables
ecs_taks_definition_host_port = 3000
ecs_taks_definition_cpu       = 1024
ecs_taks_definition_memory    = 2048
ecs_target_group_health_check_path = "/api/health"
# ECS Service Variables
ecs_service_container_port = 3000

# ECR Service Variables
ecr_force_delete = true

# Git Variables
git_repository_url  = "https://git-codecommit.ap-south-1.amazonaws.com/v1/repos/AI-Generated-App"
git_repository_name = "AI-Generated-App"
git_repository_branch     = "master"
