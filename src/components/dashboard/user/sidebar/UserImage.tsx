import Image from "next/image";
import React from "react";
type Props={
  classes?:string;
}
const UserImage:React.FC<Props> = ({classes}) => {
  return (
    <div className={`${classes} border border-solid border-primary rounded-full p-4 mx-auto relative mb-6`}>
      <Image
        width={96}
        height={96}
        src={
          "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1699833600&semt=ais"
        }
        alt="image"
        className="rounded-full"
      />
    </div>
  );
};

export default UserImage;
