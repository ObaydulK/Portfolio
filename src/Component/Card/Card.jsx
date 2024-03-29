
const Card = () => {
    return (
        <div>
            <div class="bg-[#212529] rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div class=" p-8 items-baseline text-gray-900 dark:text-white">
                    <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Standard plan</h5>

                    <span class="text-4xl font-semibold text-white">Illustration</span>

                    <ul role="list" class="space-y-5 my-7 ">
                        <li class="flex items-center">
                         <div className="text-white"> >> </div>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">2 team members</span>
                        </li>
                        <li class="flex">
                        <div className="text-white"> >> </div>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">20GB Cloud storage</span>
                        </li>
                        <li class="flex">
                        <div className="text-white"> >> </div>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Integration help</span>
                        </li>
                        <li class="flex">
                        <div className="text-white"> >> </div>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Integration help</span>
                        </li>
                        <li class="flex">
                        <div className="text-white"> >> </div>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Integration help</span>
                        </li>
                        <li class="flex">
                        <div className="text-white"> >> </div>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Integration help</span>
                        </li>

                    </ul>

                </div>

            </div>
        </div>
    );
};

export default Card;