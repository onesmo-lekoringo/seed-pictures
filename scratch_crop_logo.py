import os
from PIL import Image

def trim_transparent(image_path, output_path):
    img = Image.open(image_path)
    if img.mode != 'RGBA':
        img = img.convert('RGBA')
    
    # Get the bounding box of non-transparent pixels
    bbox = img.getbbox()
    if bbox:
        cropped_img = img.crop(bbox)
        cropped_img.save(output_path, "PNG")
        print(f"Successfully trimmed logo and saved to {output_path}")
        print(f"Original size: {img.size}, New size: {cropped_img.size}")
    else:
        print("No non-transparent pixels found in image.")

if __name__ == "__main__":
    logo_path = "/home/leko/Desktop/projects/seed_pictures/seed-pictures-launch-main/public/Horizontal-Main-Logo.png"
    trim_transparent(logo_path, logo_path)
