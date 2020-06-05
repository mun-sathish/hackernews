const generateApiObject = (key, url) => {
    return {
        url,
        action: {
            requested: key + "_REQUESTED",
            success: key + "_SUCCESS",
            failure: key + "FAILURE"
        }
    }
}

const BASE_URI = "http://hn.algolia.com/api/v1";
export const NEWS = generateApiObject("NEWS", BASE_URI + "/search");