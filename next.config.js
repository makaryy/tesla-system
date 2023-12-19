/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "res.cloudinary.com",
                pathname: `/${process.env.CLOUDINARY_CLOUD_NAME}/**`
            }
        ]
    }
};

module.exports = nextConfig;
