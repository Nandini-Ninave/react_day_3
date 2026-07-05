import type { Meta, StoryObj } from "@storybook/react-vite";
import TextInput from "../components/TextInput";

const meta : Meta<typeof TextInput> = {
    component : TextInput,
    title : "UI/textInput",
}
export default meta

export const InputComp : StoryObj<typeof TextInput>={
    args:{
        label: "Name",
        placeholder:"Enter Name...",
        backgroundColor:"brown"
    }
} 
