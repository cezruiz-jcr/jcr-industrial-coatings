from PIL import Image
import os, shutil

src = "/home/ubuntu/upload"
dst = "/home/ubuntu/jcr-website/assets/images"
os.makedirs(dst, exist_ok=True)

# Logo
img = Image.open(f"{src}/jcrlogomain.webp").convert("RGBA")
img.save(f"{dst}/logo.png", "PNG")
print("logo.png ✓")

# Blue tank photo
img = Image.open(f"{src}/IMG-8774.webp").convert("RGB")
img.save(f"{dst}/tank-blue.jpg", "JPEG", quality=88)
print("tank-blue.jpg ✓")

# Tower hero (already PNG)
shutil.copy(f"{src}/ChatGPTImageFeb25,2026,11_43_39AM.png", f"{dst}/tower-hero.png")
print("tower-hero.png ✓")

# HEIC images — try with PIL (needs pillow-heif)
try:
    import pillow_heif
    pillow_heif.register_heif_opener()
    img = Image.open(f"{src}/IMG_2939.heic").convert("RGB")
    img.save(f"{dst}/project-1.jpg", "JPEG", quality=88)
    print("project-1.jpg ✓")
    img = Image.open(f"{src}/IMG_1190.HEIC").convert("RGB")
    img.save(f"{dst}/project-2.jpg", "JPEG", quality=88)
    print("project-2.jpg ✓")
except Exception as e:
    print(f"HEIC skipped: {e}")

print("Done.")
