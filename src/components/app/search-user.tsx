import { Command, CommandInput } from '@/components/ui/command';
import { type InputEvent, type ReactElement } from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Settings } from 'lucide-react';
import type { SearchParameters } from '@/types/types';

export function DropdownMenuRadioGroupDemo() {}

export function SeachUser({
  searchQuery,
  searchParameter,
  setSearchQuery,
  setSearchParameter,
}: {
  searchQuery: string;
  searchParameter: SearchParameters;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setSearchParameter: React.Dispatch<React.SetStateAction<SearchParameters>>;
}): ReactElement {
  const onSearchInput = (evt: InputEvent<HTMLInputElement>): void => {
    setSearchQuery(evt.currentTarget.value);
  };

  const onSearchParemeterChange = (value: string): void => {
    setSearchParameter(value as SearchParameters);
  };

  return (
    <Command className="border shadow-md mb-5 w-55 relative md:min-w-[450px] md:mr-auto">
      <CommandInput
        placeholder={`Search user by ${searchParameter}...`}
        value={searchQuery}
        onInput={onSearchInput}
      />

      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            className="absolute w-5 top-0 bottom-0 right-0"
            variant="ghost"
          >
            <Settings />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-25 mr-3">
          <DropdownMenuLabel className="text-center">
            Search user by:
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={searchParameter}
            onValueChange={onSearchParemeterChange}
          >
            <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="email">Email</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </Command>
  );
}
