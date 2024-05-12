import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from './MyDocument';

interface IMyForm {
  name: string;
  picture: FileList;
}

function DocumentForm() {
  const [task, setTask] = useState<IMyForm>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IMyForm>({
    mode: 'onBlur',
  });

  const saveElement = (data: IMyForm) => {
    setTask(data);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit(saveElement)}>
        <input
          {...register('name', {
            required: 'Поле обязательно для заполнения',
            minLength: {
              value: 5,
              message: 'Нужно больше символов',
            },
          })}
        />
        <input
          type="file"
          accept="image/*"
          {...register('picture', {
            required: 'Required',
          })}
        />

        <div>{errors.name?.message}</div>
        <button type="submit">Сохранить</button>
      </form>

      {!!task?.name && (
        <PDFDownloadLink
          document={<MyDocument name={task.name} picture={task.picture[0]} />}
          fileName="file.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? 'Загрузка...' : 'Скачать'
          }
        </PDFDownloadLink>
      )}
    </div>
  );
}

export default DocumentForm;
