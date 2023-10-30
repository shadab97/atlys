import Image from "next/image";

export default function Home() {
  /*
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.53118 10.6665C5.53118 7.83026 7.83042 5.53102 10.6667 5.53102C13.5029 5.53102 15.8022 7.83026 15.8022 10.6665C15.8022 13.5028 13.5029 15.802 10.6667 15.802C7.83042 15.802 5.53118 13.5028 5.53118 10.6665ZM10.6667 3.53102C6.72585 3.53102 3.53118 6.72569 3.53118 10.6665C3.53118 14.6073 6.72585 17.802 10.6667 17.802C14.6075 17.802 17.8022 14.6073 17.8022 10.6665C17.8022 6.72569 14.6075 3.53102 10.6667 3.53102ZM15.934 29.3336L6.46659 34.5709V24.0963L15.934 29.3336ZM6.32166 21.7305C5.48854 21.2696 4.46659 21.8722 4.46659 22.8243L4.46659 35.8429C4.46659 36.795 5.48854 37.3976 6.32166 36.9367L18.0885 30.4274C18.9484 29.9517 18.9484 28.7155 18.0885 28.2398L6.32166 21.7305ZM22.3333 23.5834C22.3333 22.893 22.893 22.3334 23.5833 22.3334H35.0833C35.7737 22.3334 36.3333 22.893 36.3333 23.5834V35.0834C36.3333 35.7737 35.7737 36.3334 35.0833 36.3334H23.5833C22.893 36.3334 22.3333 35.7737 22.3333 35.0834V23.5834ZM24.3333 24.3334V34.3334H34.3333V24.3334H24.3333ZM35.7071 5.70684C36.0976 5.31631 36.0976 4.68315 35.7071 4.29263C35.3166 3.9021 34.6834 3.9021 34.2929 4.29263L29.3333 9.25222L24.3738 4.29269C23.9832 3.90217 23.3501 3.90217 22.9596 4.29269C22.569 4.68322 22.569 5.31638 22.9596 5.70691L27.9191 10.6664L22.9596 15.626C22.569 16.0165 22.569 16.6496 22.9596 17.0402C23.3501 17.4307 23.9832 17.4307 24.3738 17.0402L29.3333 12.0806L34.2929 17.0402C34.6834 17.4308 35.3166 17.4308 35.7071 17.0402C36.0976 16.6497 36.0976 16.0166 35.7071 15.626L30.7475 10.6664L35.7071 5.70684Z" fill="#C5C7CA"/>
</svg>

  */
  return (
    <main className="container max-w-[700px] py-20 px-10 md:px-12 flex flex-col mx-auto">
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
          <button className="bg-blue text-white rounded-md text-base font-medium px-10 py-3">
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
    </main>
  );
}
