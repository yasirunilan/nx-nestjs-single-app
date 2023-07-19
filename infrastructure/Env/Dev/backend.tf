terraform {
  backend "s3" {
    bucket         = "nestjs-single-docker-app-test"
    key            = "dev/terraform.tfstate"
    region         = "ap-southeast-1"
    dynamodb_table = "nestjs-single-docker-app-test-state-table"
  }
}
