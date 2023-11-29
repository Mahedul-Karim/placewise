import React from "react";
import Input from "../form/Input";
import Radio from "../form/Radio";
import Button from "@/components/ui/button/ButtonOutline";
import UserImage from "../../sidebar/UserImage";
import Title from "@/components/ui/Title";
type Props={
    classes?:string;
}
const PersonalInfo:React.FC<Props> = ({classes}) => {
  return (
    <section className={`${classes} px-6 py-4`}>
      <Title>Details</Title>
      <UserImage classes="w-24 h-24 md:hidden flex items-center justify-center"/>
      <div className="flex flex-col md:flex-row items-center gap-3 mb-4">
        <Input label="Full name" type="text" />
        <Input label="E-mail" type="text" />
      </div>
      <Input label="Phone(Optional)" type="number" classes="mb-4" />
      <div className="mb-4">
        <h3 className="font-[500]">Gender :</h3>
        <div className="flex items-center gap-2 mt-2">
          <Radio name="gender" id="maleRadio" label="Male" />
          <Radio name="gender" id="femaleRadio" label="Female" />
        </div>
      </div>
      <div className="mb-4">
        <h3 className="font-[500]">Bio :</h3>
        <textarea
            className="border border-solid border-border py-2 rounded-2xl px-6 focus:outline-none w-full"
            rows={5}
          />
      </div>
      <div className="flex 400px:items-center gap-2 flex-col 400px:flex-row">

      <Button styles="bg-primary text-white font-[600]">Save Changes</Button>
      <Button outline>Become a vendor</Button>
      </div>
    </section>
  );
};

export default PersonalInfo;
