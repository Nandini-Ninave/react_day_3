import { isMeta } from "storybook/internal/csf";
// import ButtonComp from "../components/ButtonComp";
import type { StoryObj, Meta } from "@storybook/react-vite";
import ButtonComp from "../components/ButtonComp";

const meta : Meta<typeof ButtonComp> = {
    component : ButtonComp,
    title: "UI/Buttoncomp"
}
export default meta

export const Buttoncomp: StoryObj<typeof ButtonComp>={
    args:{
        label: "click"
    }
}