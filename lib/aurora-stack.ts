import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { Vpc } from "./constructs/vpc";
import { Aurora } from "./constructs/aurora";

export class AuroraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // VPC
    const vpc = new Vpc(this, "Vpc");

    // Aurora
    const aurora = new Aurora(this, "Aurora", {
      vpc: vpc.vpc,
    })
  }
}
