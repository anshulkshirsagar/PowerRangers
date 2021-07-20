var canvas = new fabric.Canvas("myCanvas");

//  block_y=1;
//  block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image, block_x, block_y){
    fabric.Image.fromURL(get_image, function (Img){
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		console.log("x:" + block_x);
		console.log("y:" + block_y);

        block_image_object.set({
            top:block_y,
            left:block_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82')
	{
		new_image('rr1.png', 1, 1);
		console.log("r");
	}
	if(keyPressed == '71')
	{
		new_image('gr.png', 250, 1);
		console.log("g");
	}
	
	if(keyPressed == '89')
	{
		new_image('yr.png', 425, 1);
		console.log("y");
	}
	if(keyPressed == '80')
	{
		new_image('pr.png', 715, 1);
		console.log("p");
	}
	if(keyPressed == '66')
	{
		new_image('br.png', 850, 1);
		console.log("b");
	}
	
}

