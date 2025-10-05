self.__uv$config = {
    prefix: '/z/-kit/',
    bare:'https://focus-bare-gamma.vercel.app/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/z/kit/uv.handler.js',
    bundle: '/z/kit/uv.bundle.js',
    config: '/z/kit/uv.config.js',
    sw: '/z/kit/uv.sw.js',
};
