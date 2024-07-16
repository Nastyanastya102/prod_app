import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentFormActions, AddCommentFormReducer } from '../../model/slices/AddCommentFormSlice';

import {
    getaddCommentFormError,
    getAddCommentFormText,
} from '../../model/selectors/AddCommentFormSelectors';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string
    onSendComment?: (text: string) => void
}

const initialReducers: ReducersList = {
    addCommentForm: AddCommentFormReducer,
};

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getaddCommentFormError);

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(AddCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment?.(text || '');
        onCommentTextChange('');
    }, [text, onCommentTextChange, onSendComment]);

    return (
        <DynamicModuleLoader
            reducers={initialReducers}
        >
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    value={text}
                    placeholder={t('Enter comment text')}
                    onChange={onCommentTextChange}
                />
                <Button theme={ButtonTheme.OUTLINE} onClick={onSendHandler}>{t('Send')}</Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
