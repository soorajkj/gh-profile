import { Button } from "@/components/core/Button";
import { Icon } from "@/components/core/Icon";
import { Input } from "@/components/core/Input";

export default function SearchRepo() {
  return (
    <form className="mb-8 flex items-center space-x-4">
      <div className="relative flex-1">
        <Icon
          icon="search"
          label="search"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-color-gray-500"
        ></Icon>
        <Input placeholder="Search Projects" className="pl-10"></Input>
      </div>
      <Button variant="primary">
        <span>Find Repository</span>
      </Button>
    </form>
  );
}
