import Image from "next/image";
import React from "react";
import DeleteIcon from "@svg/delete.svg";
import UploadImageIcon from "@svg/upload-image.svg";
import { ErrorMessage, useFormikContext } from "formik";

interface Props {
  name?: string;
}

function UploadImage({ name = "image" }: Props) {
  const { setFieldValue, values }: any = useFormikContext();

  function onChange(e: React.FormEvent<HTMLInputElement> | any) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setFieldValue(name, reader.result?.toString() as string);
    };
    reader.readAsDataURL(file);
  }
  return (
    <div className="pb-4 h-full w-full">
      <div className="h-full w-full border-2  border-dashed rounded-md border-primary-100 relative">
        {values[name] === "" ? (
          <>
            <label
              className="h-full cursor-pointer w-full bg-primary-100 bg-opacity-10 border-2 flex justify-center items-center"
              htmlFor={name}
            >
              <Image src={UploadImageIcon} alt={name} height={45} width={43} />
            </label>

            <input
              type="file"
              name={name}
              id={name}
              value={values[name]}
              onChange={onChange}
              hidden
            />
          </>
        ) : (
          <>
            <Image
              src={values[name] as string}
              alt="dd"
              className="w-full h-full"
              width={300}
              height={400}
            />
            <Image
              className="absolute bottom-2 mx-2 cursor-pointer"
              alt="delete icon"
              onClick={() => setFieldValue(name, "")}
              src={DeleteIcon}
              width={25}
              height={30}
            />
          </>
        )}
      </div>
      <span className="text-red-600">
        <ErrorMessage name={name} />
      </span>
    </div>
  );
}

export default UploadImage;
