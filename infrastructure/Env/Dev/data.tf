# Get Region Available Zones
data "aws_availability_zones" "az_availables" {
  state = "available"
}

# Get User Details
data "aws_caller_identity" "current" {}


# Ubuntu AMI
data "aws_ami" "ubuntu" {
  most_recent = true

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }

  filter {
    name   = "architecture"
    values = ["x86_64"]
  }

  # Canonical
  owners = ["099720109477"]
}

data "aws_codecommit_repository" "repo" {
  repository_name = var.git_repository_name
}
