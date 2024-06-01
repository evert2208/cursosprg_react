import { useDispatch, useSelector } from 'react-redux'
import { onOpenModal, onCloseModal } from '../ui/uiSlice';

export const useUiStore = () => {

    const dispatch = useDispatch();
    const {
        isModalOpen
    } = useSelector(state => state.ui);


    const openModal = () => {
        dispatch(onOpenModal())
    }

    const closeModal = () => {
        dispatch(onCloseModal())
    }

    const toggleModal = () => {
        (isModalOpen) ? openModal(): closeModal();
    }

    return {
        //* Propiedades
        isModalOpen,

        //*Metodos
        openModal,
        closeModal,
        toggleModal
    }
}