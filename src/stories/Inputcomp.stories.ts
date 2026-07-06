import type { Meta, StoryObj } from "@storybook/react-vite";
import Inputcomp from "../components/Inputcomp";

const meta:Meta<typeof Inputcomp>={
    component: Inputcomp,
    title: "UI/Inputcomp"
}
export default meta

export const inputcomp: StoryObj<typeof Inputcomp>={
    args:{
        label:"Name",
        placeholder:"Enter name..."
    }
}