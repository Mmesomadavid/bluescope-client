import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar";
import { Popover, PopoverTrigger, PopoverContent } from "../../../components/ui/popover";

const Header = () => {
  return (
    <header className="bg-gray-50 px-6 py-4 flex items-center justify-end">
      {/* Right side - Profile with popover */}
      <div className="flex items-center space-x-4">
        <Popover>
          <PopoverTrigger asChild>
            <button className="flex items-center space-x-3 focus:outline-none bg-transparent border-0 p-0 relative">
              <div className="relative">
                <Avatar>
                  <AvatarImage src="https://ui-avatars.com/api/?name=John+Galt" alt="User avatar" />
                  <AvatarFallback>JG</AvatarFallback>
                </Avatar>
                {/* Active green dot */}
                <span className="absolute bottom-0 right-0 block w-3 h-3 rounded-full ring-2 ring-white bg-green-500" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold text-gray-900">John Galt</span>
                <span className="text-xs text-gray-500">john.galt@email.com</span>
              </div>
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-56">
            <div className="flex flex-col items-start space-y-2">
              <span className="text-sm font-semibold text-gray-900">John Galt</span>
              <span className="text-xs text-gray-500">john.galt@email.com</span>
              <div className="flex items-center space-x-2">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs text-green-700">Active</span>
              </div>
              <button className="mt-2 px-3 py-1 rounded bg-background text-gray-700 text-sm hover:bg-gray-200 w-full text-left">
                My Account
              </button>
              <button className="mt-2 px-3 py-1 rounded bg-background text-gray-700 text-sm hover:bg-gray-200 w-full text-left">
                Logout
              </button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default Header;