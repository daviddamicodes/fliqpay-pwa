import React, { useCallback, useEffect } from "react";
import ReactModal from "react-modal";
import { useSpring, animated } from "react-spring";
import { MdClose } from "react-icons/md";
import { RiCheckLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { numFormat } from "./NumberFormat";
import { useDispatch } from "react-redux";
import { setPay } from "../redux/actions/detailsActions";
import { setRefill } from "../redux/actions/detailsActions";
import { useHistory } from "react-router";
import Modal from "./ReactModal";

const PaymentModal = ({ modalIsOpen, setModalIsOpen, openModal }) => {
  const state = useSelector((state) => state.details);

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: modalIsOpen ? 1 : 0,
    transform: modalIsOpen ? `translateY(0%)` : `translateY(-100%)`,
  });

  const keyPress = useCallback(
    (e) => {
      if (e === "Escape" && modalIsOpen) {
        setModalIsOpen(false);
      }
    },
    [modalIsOpen, setModalIsOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyPress]);

  const dispatch = useDispatch();

  const paymentAlert = () => {
    dispatch(setPay());
    openModal();
  };

  const history = useHistory();

  const handleFailed = () => {
    history.push("/recipient");
    dispatch(setRefill());
  };

  return (
    <Modal modalIsOpen={modalIsOpen}>
      <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
        <animated.div style={animation}>
          {state.fullName !== "" && state.email !== "" ? (
            <div className="w-72 bg-white text-center p-4 rounded-lg relative">
              <div className="py-4 px-8 border-gray-1 border-2 appearance-none mb-4">
                <h4 className="text-1xs text-gray-400">Total Amount Paid</h4>
                <h1 className="text-purple-900 text-2xl font-medium">
                  {numFormat(state.youSend)}
                  <span className="text-xs font-medium ml-1">
                    {state.fromCurrency}
                  </span>
                </h1>
              </div>
              <div className="py-8 px-8 border-gray-1 border-2 appearance-none">
                <div className="h-14 w-14 bg-green-300 bg-opacity-20 mx-auto mb-8 flex items-center justify-center rounded-md">
                  <RiCheckLine className="text-green-500 text-4xl" />
                </div>
                <h3 className="text-purple-900 font-medium">
                  Transfer Successful
                </h3>
                <p className="text-gray-400 text-1xs font-normal">
                  Congratulations. You've successfully completed your payment.
                </p>
              </div>
              <div className="flex mt-3">
                <button
                  className="font-medium text-xs py-3 px-4 bg-white text-white bg-mid-blue flex-grow rounded-md"
                  onClick={paymentAlert}
                >
                  Ok
                </button>
              </div>
              <div
                className="bg-white h-8 w-8 rounded-full border-gray-1 border-2 absolute -top-3 -right-3 cursor-pointer flex items-center justify-center"
                onClick={openModal}
              >
                <MdClose className="text-gray-400" />
              </div>
            </div>
          ) : (
            <div className="w-72 bg-white text-center p-4 rounded-lg relative">
              <div className="py-8 px-8 border-gray-1 border-2 appearance-none">
                <div className="h-14 w-14 bg-red-300 bg-opacity-20 mx-auto mb-8 flex items-center justify-center rounded-md">
                  <MdClose className="text-red-500 text-4xl" />
                </div>
                <h3 className="text-purple-900 font-medium">Transfer Failed</h3>
                <p className="text-gray-400 text-1xs font-normal">
                  Kindly confirm that all feilds are correctly filled.
                </p>
              </div>
              <div className="flex mt-3">
                <button
                  className="font-medium text-xs py-3 px-4 bg-white text-white bg-mid-blue flex-grow rounded-md"
                  onClick={handleFailed}
                >
                  Return
                </button>
              </div>
              <div
                className="bg-white h-8 w-8 rounded-full border-gray-1 border-2 absolute -top-3 -right-3 cursor-pointer flex items-center justify-center"
                onClick={openModal}
              >
                <MdClose className="text-gray-400" />
              </div>
            </div>
          )}
        </animated.div>
      </div>
    </Modal>
  );
};

export default PaymentModal;
