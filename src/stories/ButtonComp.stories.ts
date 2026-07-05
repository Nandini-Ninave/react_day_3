import type { Meta, StoryObj } from "@storybook/react-vite";
import  ButtonComp from "../components/ButtonComp";
import { background } from "storybook/theming";

const meta: Meta<typeof ButtonComp> = {
    component: ButtonComp,
    title: "UI/ButtonComp"
}
export default meta

export const Buttoncomponent : StoryObj<typeof ButtonComp>={
    args:{
        label:"click",
        backgroundColor:"grey",
        border_radius:"50%"
    }
}