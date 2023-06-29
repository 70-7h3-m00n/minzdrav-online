import type { NextApiRequest, NextApiResponse } from 'next'

const preview = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.query.secret !== process.env.previewSecret) {
        return res.status(401).json({ message: 'Invalid token' })
    }

    res.setPreviewData({})
    res.redirect('/')
}

export default preview
