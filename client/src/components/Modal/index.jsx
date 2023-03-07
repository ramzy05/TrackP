import { useContext } from 'react';
import { ModalContext } from '../AdminLayout';
import { MdOutlineClose } from 'react-icons/all';

const Modal = () => {
	const { isOpen, setIsOpen, modalContent, setModalContent } =
		useContext(ModalContext);

	function handleCloseModal(e) {
		if (!e.target.classList.contains('modal-content')) {
			setIsOpen(!isOpen);
			setModalContent('');
		}
	}
	return (
		<div>
			<div
				id="modal"
				onClick={handleCloseModal}
				className={`${isOpen ? 'scale-100' : 'scale-0'} modal
       transition-transform duration-500
      bg-blurColor absolute
      top-0 left-0 right-0 bottom-0 flex items-center justify-center
      `}
			>
				<div
					className={`
        modal-content w-3/4 h-5/6 bg-white box-shadow relative
        
        `}
				>
					<button
						onClick={handleCloseModal}
						className="flex items-center justify-center text-error absolute right-6 top-6"
					>
						<MdOutlineClose size={36} title="Close" />
					</button>
					<div className={`content`}>{modalContent}</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
