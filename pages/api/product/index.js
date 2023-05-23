import { createRouter } from "next-connect";
const router = createRouter();
import { getDataWithoutBody } from "../../../libs/requestMethod";

export const config = {
    api: {
        bodyParser: true, // Disallow body parsing, consume as stream
    }
}

const handler = router.handler({
    onError: (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
        res.status(404).end("Page is not found");
    },
})


// ============================================================//
// check user if already register
// ============================================================//

router.get(async (req, res) => {
    try {
        let data = await getDataWithoutBody(`${process.env.NEXT_PUBLIC_APIURL}/dashboard/all`)

        res.status(200).send({ data });
    } catch (error) {
        console.log(error)
        res.status(401).send({ error: error })
    }
})

export default handler;