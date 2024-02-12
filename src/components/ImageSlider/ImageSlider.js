import SimpleImageSlider from "react-simple-image-slider";

function ImageSlider(props) {

    return (<>
        <div style={{ marginLeft: props.marginLeft, marginTop: props.marginTop }}>
            <SimpleImageSlider
                width={props.width}
                height={props.height}
                images={props.images}
                showBullets={props.showBullets}
                showNavs={props.showNavs}
            />
        </div>
    </>)
}

export default ImageSlider;