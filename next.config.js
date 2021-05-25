module.exports = {
    async redirects() {
        return [
            {
                source: '/:path((?!not-supported.html$).*)',
                has: [
                    {
                        type: 'header',
                        key: 'User-Agent',
                        value: 'Mozilla/5.0 \\(Windows NT 10.0; Trident/7.0; rv\\:11.0\\) like Gecko'
                    }
                ],
                destination: '/not-supported.html',
                permanent: false
            }
        ];
    },
}