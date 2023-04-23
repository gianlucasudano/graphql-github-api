import { useForm, Control, SubmitHandler } from 'react-hook-form';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import TextFieldControlled, {
  type TextFieldControlledProps,
} from 'components/TextFieldControlled';

export type RepoName = string;

interface FormData {
  reponame: RepoName;
}

const defaultValues = {
  reponame: '',
};

const repoNameProps = {
  label: 'reponame',
  name: 'reponame',
  placeholder: 'Search repos by name...',
  required: true,
  size: 'small',
} as TextFieldControlledProps;

function SearchForm({
  setRepoName,
}: {
  setRepoName: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { handleSubmit, control, reset } = useForm({ defaultValues });

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    setRepoName(formData.reponame);
    reset(defaultValues);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} method="post">
      <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
        <TextFieldControlled
          sx={{ flexGrow: 2, mr: 1 }}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...repoNameProps}
          useFormControl={control as unknown as Control}
        />
        <Button variant="outlined" color="inherit" type="submit">
          Search
        </Button>
      </Stack>
    </form>
  );
}

export default SearchForm;
