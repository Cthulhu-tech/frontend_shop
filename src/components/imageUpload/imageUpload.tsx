import ImageUploading, { ImageListType } from "react-images-uploading"
import { updateImages } from '../../redux/store/imageStore'
import { useDispatch, useSelector } from 'react-redux'
import { ReduxStore } from '../../redux/type'

export const ImageUpload = () => {

    const maxNumber = 5
    const dispatch = useDispatch()
    const images = useSelector((store: ReduxStore) => store.ImageStore)
  
    const onChange = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
      console.log(imageList)
      dispatch(updateImages(imageList))
  }
    return <div className="container col-5 mt-5 mb-5 mx-auto p-2">
            <div className="card-body m-0 p-0">
              <ImageUploading multiple value={images} onChange={onChange} maxNumber={maxNumber}>
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  dragProps
                }) => (
                  <div className="upload__image-wrapper">
                      <button type='button' className="btn btn-dark m-2" onClick={onImageUpload} {...dragProps}>Загрузить картинку</button>
                      <button type='button' className="btn btn-dark m-2" onClick={onImageRemoveAll}>Удалить все картинки</button>
                      {imageList.map((image, index) => (
                          <div key={index} className="card-body">
                          <img src={image.dataURL} className="card-img-top mt-5 mb-5" alt="" height={'100px'} />
                            <div className="card-body">
                                <button type='button' className="btn btn-primary m-2" onClick={() => onImageUpdate(index)}>Изменить</button>
                                <button type='button' className="btn btn-primary m-2"  onClick={() => onImageRemove(index)}>Удалить</button>
                            </div>
                          </div>
                      ))}
                  </div>
                )}
              </ImageUploading>
            </div>
          </div>

}