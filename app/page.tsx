"use client";
import Modal from "@/components/modal";
import SignUp from "@/components/signup";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <main className="relative">
      <section className="container max-w-[700px] py-20 px-10 md:px-12 flex flex-col mx-auto">
        <div className="mb-10 flex flex-col gap-3">
          <h4 className="text-2xl font-medium text-grey_100">Hello Jane</h4>
          <p className="text-grey_300 text-base font-normal">
            How are you doing today? Would you like to share something with the
            community 🤗
          </p>
        </div>
        <div className="border-2 flex flex-col gap-4 w-full bg-bg_dark_light border-grey_200 py-6 px-5 rounded-lg">
          <label htmlFor="post " className="text-grey_100 font-normal text-lg">
            Create Post
          </label>
          <div className="bg-grey_600 rounded-lg gap-4 flex p-4">
            <div className="w-16 text-xl rounded-full flex justify-center items-center bg-bg_dark_light h-16">
              💬
            </div>
            <input
              type="text"
              placeholder="How are you feeling today?"
              className="flex-1 text-base placeholder:text-base placeholder:text-grey_300 text-grey_300 font-normal bg-transparent"
            />
          </div>
          <div className="flex  justify-end">
            <button
              onClick={() => {
                setOpenModal(true);
              }}
              className="bg-blue text-white rounded-md text-base font-medium px-10 py-3"
            >
              Post
            </button>
          </div>
        </div>
        <div className="space-y-4 mt-4">
          {[1, 2].map((each) => (
            <div
              key={each}
              className="border-2 flex flex-col gap-4 w-full bg-bg_dark_light border-grey_200 py-6 px-5 rounded-lg"
            >
              <div className="gap-4 flex">
                <div className="w-16 text-xl rounded-full flex justify-center items-center bg-bg_dark_light h-16">
                  <Image
                    className="rounded-full"
                    width={64}
                    height={64}
                    src="/user.png"
                    alt="author"
                  />
                </div>
                <div className="flex-1 justify-between flex items-center">
                  <div>
                    <p className="text-grey_100 font-medium text-base">
                      Theresa Webb
                    </p>
                    <p className="text-grey_300">5mins ago</p>
                  </div>
                  <div className="text-grey_100">⋯</div>
                </div>
              </div>
              <div className="bg-grey_600 rounded-lg gap-4 flex p-4">
                <div className="w-16 text-xl rounded-full flex justify-center items-center bg-bg_dark_light h-16">
                  👋
                </div>
                <p className="flex-1 text-grey_300 text-base font-normal leading-6">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="flex gap-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.3333 3.83333L2.66662 3.83336C1.8382 3.83336 1.16663 4.50493 1.16663 5.33336V13.3334C1.16663 14.1618 1.8382 14.8334 2.66662 14.8334H10C10.1326 14.8334 10.2598 14.886 10.3536 14.9798L13.5 18.1262V15.3334C13.5 15.0572 13.7238 14.8334 14 14.8334H17.3333C18.1617 14.8334 18.8333 14.1618 18.8333 13.3334V5.33333C18.8333 4.5049 18.1617 3.83333 17.3333 3.83333ZM2.66662 2.83336L17.3333 2.83333C18.714 2.83333 19.8333 3.95262 19.8333 5.33333V13.3334C19.8333 14.7141 18.714 15.8334 17.3333 15.8334H14.5V19.3333C14.5 19.5356 14.3781 19.7179 14.1913 19.7953C14.0045 19.8727 13.7894 19.8299 13.6464 19.6869L9.79289 15.8334H2.66662C1.28591 15.8334 0.166626 14.7141 0.166626 13.3334V5.33336C0.166626 3.95265 1.28591 2.83336 2.66662 2.83336Z"
                      fill="#C5C7CA"
                    />
                  </svg>
                </div>
                <p className="text-grey_300 font-medium">24 comments</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {openModal && (
        <Modal open={openModal} handleClose={() => setOpenModal(false)}>
          <SignUp />
        </Modal>
      )}
    </main>
  );
}
