function new_image()
{
    fabric.Image.fromURL('BirthdayImage.jpg', function(Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeidth(510);
blcok_image_object.set({
    top:0,
    left:0
});
canvas.add(blockk_image_object);
    });
}
function playSound()
{
    x.play("https://www.youtube.com/watch?v=_z-1fTlSDF0");
}