import { type ReactElement } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import type { User } from '@/types/types';

const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      error: 'Name must be at least 2 characters.',
    })
    .refine(
      (formName) => {
        const nameRegExp = new RegExp('^[a-zA-Z А-Яа-я]+$');
        return nameRegExp.test(formName);
      },
      {
        error: 'Name must be without digits',
      }
    ),
  email: z.email(),
  role: z.literal(['user', 'admin', 'manager'], {
    error: 'Role field is required. Choose one of the options please',
  }),
});

export default function AddUserForm({
  onAddUserSubmit,
}: {
  onAddUserSubmit: (userData: User) => void;
}): ReactElement {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      role: undefined,
    },
    mode: 'all',
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (form.formState.isValid) {
      onAddUserSubmit({
        id: getRandomInt(0, 10000),
        ...values,
      });
    }
  };

  return (
    <>
      <Dialog>
        <Form {...form}>
          <form id="form" onSubmit={form.handleSubmit(onSubmit)}>
            <DialogTrigger asChild>
              <Button variant="outline">Add user</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>User add form</DialogTitle>
              </DialogHeader>

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Pedro Duarte" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="example@example.com"
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        required
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="user">User</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                          <SelectItem value="manager">Manager</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit" form="form">
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Form>
      </Dialog>
    </>
  );
}
