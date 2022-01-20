import * as Yup from 'yup';

export const WorkToDo = Yup.object().shape({
todoName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('required'),
});
