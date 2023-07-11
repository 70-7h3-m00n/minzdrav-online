import type { NextApiRequest, NextApiResponse } from 'next'
import { routeDomainFront } from '@/src/config/routerApi'

const quitPreview = async (req: NextApiRequest, res: NextApiResponse) => {
    res.clearPreviewData()
    res.redirect(routeDomainFront.root)
}

export default quitPreview
