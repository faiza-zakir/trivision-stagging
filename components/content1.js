import { memo, useState } from "react";
import PropTypes from "prop-types";

const Content1 = memo(({ className = "" }) => {
  const [formData, setFormData] = useState({
    Name: "",
    Comapny: "",
    Email: "",
    Phone: "",
    Subject: "",
    Message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    const { Name, Comapny, Email, Phone, Subject, Message } = formData;

    if (!Name || !Comapny || !Email || !Phone || !Subject || !Message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        "https://romantic-acoustics-22fbc9f32c.strapiapp.com/api/contacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: formData }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form.");
      }

      toast.success("Form submitted successfully!");
      setFormData({
        Name: "",
        Comapny: "",
        Email: "",
        Phone: "",
        Subject: "",
        Message: "",
      });
    } catch (err) {
      console.error("ERR", err);
      toast.error("Submission failed. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`w-[1300px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-10 max-w-full text-center text-21xl text-black font-h4-32 mq750:gap-5 ${className}`}
    >
      <h1 className="m-0 w-[421px] relative text-inherit leading-[120%] font-medium font-[inherit] inline-block max-w-full mq480:text-5xl mq480:leading-[29px] mq750:text-13xl mq750:leading-[38px]">
        We Are Here To Help
      </h1>
      <div className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full text-left text-base">
        <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-4 max-w-full">
            <div className="flex-1 border-gray-300 border-b-[1px] border-solid box-border flex flex-row items-center justify-start pt-5 px-0 pb-[5px] min-w-[411px] max-w-full mq750:min-w-full">
              <input
                type="text"
                placeholder="Name"
                className="flex-1 border-none outline-none leading-[150%] font-medium max-w-full bg-transparent pb-2"
              />
            </div>
            <div className="flex-1 border-gray-300 border-b-[1px] border-solid box-border flex flex-row items-center justify-start pt-5 px-0 pb-[5px] min-w-[411px] max-w-full mq750:min-w-full">
              <input
                type="text"
                placeholder="Company"
                className="flex-1 border-none outline-none leading-[150%] font-medium max-w-full bg-transparent pb-2"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-4 max-w-full">
            <div className="flex-1 border-gray-300 border-b-[1px] border-solid box-border flex flex-row items-center justify-start pt-3 px-0 pb-[5px] min-w-[411px] max-w-full mq750:min-w-full">
              <input
                type="text"
                placeholder="Phone"
                className="flex-1 border-none outline-none leading-[150%] font-medium max-w-full bg-transparent pb-2"
              />
            </div>
            <div className="flex-1 border-gray-300 border-b-[1px] border-solid box-border flex flex-row items-center justify-start pt-3 px-0 pb-[5px] min-w-[411px] max-w-full mq750:min-w-full">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 border-none outline-none leading-[150%] font-medium max-w-full bg-transparent pb-2"
              />
            </div>
          </div>
          <div className="self-stretch border-gray-300 border-b-[1px] border-solid box-border flex flex-row items-center justify-start pt-3 px-0 pb-[5px] max-w-full">
            <input
              type="text"
              placeholder="Subject"
              className="flex-1 border-none outline-none leading-[150%] font-medium max-w-full bg-transparent pb-2"
            />
          </div>
          <div className="self-stretch border-gray-300 border-b-[1px] border-solid box-border flex flex-row items-start justify-start pt-3 px-0 pb-[5px] max-w-full">
            <textarea
              placeholder="Message"
              className="flex-1 border-none outline-none leading-[150%] font-medium max-w-full h-full resize-none bg-transparent"
            />
          </div>
        </div>
        <div className="bg-black overflow-hidden flex flex-row items-center justify-center py-2 px-[23px] text-center text-background-color-primary cursor-pointer cursor-pointer hover:bg-white hover:text-black hover:border-[1px] hover:border-solid transition-all duration-300">
          <div className="flex-1 relative leading-[150%] font-medium">SEND</div>
        </div>
      </div>
    </div>
  );
});

Content1.propTypes = {
  className: PropTypes.string,
};

export default Content1;
