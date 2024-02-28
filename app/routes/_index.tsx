import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="container mx-auto">
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <div className="space-y-6">
      <div className="justify-center">
        <label  className="block text-sm font-medium leading-6 text-gray-900">Task</label>
        <div className="mt-2">
          <input id="task" name="task" type="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

    

      <div>
        <button type="submit" className="flex w-24 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
      </div>
    </div>

    
  </div>
</div>
    </div>
  );
}
