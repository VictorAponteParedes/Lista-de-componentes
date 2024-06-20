import { ModalComponent } from "../../components/modal/modal-component";




export const ModalScreen = () => {

    return (

        <ModalComponent
            title="¿Estás seguro de que deseas eliminar?"
            subTitle="Esta acción no se puede deshacer. Confirma tu decisión."
            color="#ffcccc"
            titleColor="#cf2f46"
            subTitleColor="#cf2f46"
        />



    )

}