import { withPhotos } from "../components/hoc/withPhotos"
import { ListOfPhotoCardsComponent } from "../components/ListOfPhotoCards/ListOfPhotoCards"

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)