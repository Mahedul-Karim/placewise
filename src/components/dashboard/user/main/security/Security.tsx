import React from "react";
import Input from "../form/Input";
import Button from "@/components/ui/button/ButtonOutline";
import Title from "@/components/ui/Title";
type Props = {
  classes?: string;
};
const Security: React.FC<Props> = ({ classes }) => {
  return (
    <section className={`${classes} px-6 py-4`}>
      <Title>Password</Title>

      <Input type="text" label="Current Password" />
      <div className="flex items-center flex-col md:flex-row gap-3 my-4">
        <Input type="text" label="New Password" />
        <Input type="text" label="Confirm Password" />
      </div>
      <Button styles="bg-primary text-white font-[600]">Save Changes</Button>
    </section>
  );
};

export default Security;
