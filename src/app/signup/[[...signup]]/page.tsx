import { SignUp } from "@clerk/nextjs";
// import { redirect } from "next/navigation";
import { setUserState } from "@/app/utils/commonStates";

export default function Page() {
  setUserState("user");
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="flex gap-[0.8rem] h-screen">
        <div className="hidden bg-cover lg:block lg:w-2/3 bg-[url('https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center">
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                HR Ticketing System
              </h2>

              <p className="max-w-xl mt-3 text-gray-300">
                All in one HR solution!, manage tickets, resolve issues, conduct
                surveys and get feedbacks all in one place!
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center grow">
          <SignUp
            fallbackRedirectUrl="/user/ticket"
            path="/signup"
          />
        </div>
      </div>
    </div>
  );
}