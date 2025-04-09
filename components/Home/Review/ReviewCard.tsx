import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

type Props = {
  image: string;
  name: string;
  role: string;
};

const ReviewCard = ({ image, name, role }: Props) => {
  return (
    <div>
      <div className="flex items-center space-x-6">
        {/* User image */}
        <Image
          src={image}
          alt="User"
          width={80}
          height={80}
          className="rounded-full"
        />
        <div>
          <h1 className="text-lg font-bold">{name}</h1>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
      {/* Actual Review text */}
      <p className="mt-4 text-sm text-gray-700 dark:text-gray-400 w-[80%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit Laborum et
        dolore deleniti, cumque, voluptatibus, eveniet nobis.
      </p>
      {/* Star */}
      <div className="flex items-center mt-5">
        <FaStar className="text-yellow-500 w-5 h-5" />
        <FaStar className="text-yellow-500 w-5 h-5" />
        <FaStar className="text-yellow-500 w-5 h-5" />
        <FaStar className="text-yellow-500 w-5 h-5" />
        <FaStar className="text-yellow-500 w-5 h-5" />
      </div>
    </div>
  );
};

export default ReviewCard;
