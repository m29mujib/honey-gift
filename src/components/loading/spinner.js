import { h } from "vue";
import { Loading3QuartersOutlined, ExperimentOutlined , DeploymentUnitOutlined } from "@ant-design/icons-vue";
export const spinner = h(DeploymentUnitOutlined, {
  style: {
    fontSize: "35px",
  },
  spin: true,
});
