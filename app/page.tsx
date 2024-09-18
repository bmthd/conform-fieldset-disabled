'use client';
import { CustomSelect } from '@/components/select';
import { schema } from '@/form/a';
import { useSearchForm } from '@/form/hooks';
import { FormProvider, useForm } from '@conform-to/react';
import {
  Button,
  Card,
  Container,
  Fieldset,
  Input,
  VStack,
} from '@yamada-ui/react';
export default function Home() {
  const [form, field] = useForm({
    defaultValue: {
      text: '',
      select: '',
      subSelect: 'A',
    },
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  });

  const handleClick = (formData: FormData) => {
    window.confirm(JSON.stringify(Object.fromEntries(formData.entries())));
  };

  return (
    <Container>
      <Card as={Container} bg="white">
        <FormProvider context={form.context}>
          <form action={handleClick}>
            <VStack>
              <Input name={field.text.name} />
              <CustomSelect name={field.select.name} />
              {JSON.stringify(form.value)}
              <Fieldset isDisabled>
                <CustomSelect name={field.subSelect.name} />
              </Fieldset>
              <Button type="submit" w="full" bg="blue.300">
                Submit
              </Button>
            </VStack>
          </form>
        </FormProvider>
      </Card>
    </Container>
  );
}
