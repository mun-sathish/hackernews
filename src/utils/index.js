import axios from 'axios';

export const getRequest = (action, apiURL, requestParam, apiCallBack) => {
    console.log("API Requested: " + apiURL);
    apiCallBack({ actionType: action.requested });
    axios.get(apiURL + generateRequestParam(requestParam))
        .then(success => {
            apiCallBack({ actionType: action.success, payload: success.data });
        })
        .catch(err => apiCallBack({ actionType: action.failure, paylaod: err }));
}

const generateRequestParam = (requestParam) => {
    if (!requestParam) return "";
    let requestParamStr = "?";
    Object.keys(requestParam).forEach(item => {
        requestParamStr = requestParamStr + item + "=" + requestParam[item] + "&";
    })
    requestParamStr = requestParamStr.substring(0, requestParamStr.length - 1);
    return requestParamStr;
}

export const rawData = {
    "hits": [
        {
            "created_at": "2018-03-14T03:50:30.000Z",
            "title": "Stephen Hawking has died",
            "url": "http://www.bbc.com/news/uk-43396008",
            "author": "Cogito",
            "points": 6015,
            "story_text": null,
            "comment_text": null,
            "num_comments": 436,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1520999430,
            "relevancy_score": 8012,
            "_tags": [
                "story",
                "author_Cogito",
                "story_16582136"
            ],
            "objectID": "16582136",
            "_highlightResult": {
                "title": {
                    "value": "Stephen Hawking has died",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "url": {
                    "value": "http://www.bbc.com/news/uk-43396008",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "author": {
                    "value": "Cogito",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2016-02-17T08:38:37.000Z",
            "title": "A Message to Our Customers",
            "url": "http://www.apple.com/customer-letter/",
            "author": "epaga",
            "points": 5771,
            "story_text": null,
            "comment_text": null,
            "num_comments": 967,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1455698317,
            "relevancy_score": 6561,
            "_tags": [
                "story",
                "author_epaga",
                "story_11116274"
            ],
            "objectID": "11116274",
            "_highlightResult": {
                "title": {
                    "value": "A Message to Our Customers",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "url": {
                    "value": "http://www.apple.com/customer-letter/",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "author": {
                    "value": "epaga",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2011-10-05T23:42:23.000Z",
            "title": "Steve Jobs has passed away.",
            "url": "http://www.apple.com/stevejobs/",
            "author": "patricktomas",
            "points": 4271,
            "story_text": "",
            "comment_text": null,
            "num_comments": 376,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1317858143,
            "relevancy_score": 3496,
            "_tags": [
                "story",
                "author_patricktomas",
                "story_3078128"
            ],
            "objectID": "3078128",
            "_highlightResult": {
                "title": {
                    "value": "Steve Jobs has passed away.",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "url": {
                    "value": "http://www.apple.com/stevejobs/",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "author": {
                    "value": "patricktomas",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "story_text": {
                    "value": "",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2017-02-19T21:16:33.000Z",
            "title": "Reflecting on one very, very strange year at Uber",
            "url": "https://www.susanjfowler.com/blog/2017/2/19/reflecting-on-one-very-strange-year-at-uber",
            "author": "grey-area",
            "points": 4107,
            "story_text": null,
            "comment_text": null,
            "num_comments": 1014,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1487538993,
            "relevancy_score": 7260,
            "_tags": [
                "story",
                "author_grey-area",
                "story_13682022"
            ],
            "objectID": "13682022",
            "_highlightResult": {
                "title": {
                    "value": "Reflecting on one very, very strange year at Uber",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "url": {
                    "value": "https://www.susanjfowler.com/blog/2017/2/19/reflecting-on-one-very-strange-year-at-uber",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "author": {
                    "value": "grey-area",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2013-05-16T20:57:17.000Z",
            "title": null,
            "url": null,
            "author": "codegeek",
            "points": 3913,
            "story_text": "Yes",
            "comment_text": null,
            "num_comments": null,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": 5721087,
            "created_at_i": 1368737837,
            "relevancy_score": 4625,
            "_tags": [
                "pollopt",
                "author_codegeek",
                "story_5721088"
            ],
            "objectID": "5721088",
            "_highlightResult": {
                "author": {
                    "value": "codegeek",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "story_text": {
                    "value": "Yes",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2020-05-04T08:43:35.000Z",
            "title": "Bye, Amazon",
            "url": "https://www.tbray.org/ongoing/When/202x/2020/04/29/Leaving-Amazon",
            "author": "grey-area",
            "points": 3816,
            "story_text": null,
            "comment_text": null,
            "num_comments": 1096,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1588581815,
            "_tags": [
                "story",
                "author_grey-area",
                "story_23065782"
            ],
            "objectID": "23065782",
            "_highlightResult": {
                "title": {
                    "value": "Bye, Amazon",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "url": {
                    "value": "https://www.tbray.org/ongoing/When/202x/2020/04/29/Leaving-Amazon",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "author": {
                    "value": "grey-area",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2012-01-11T23:17:39.000Z",
            "title": null,
            "url": null,
            "author": "zitterbewegung",
            "points": 3747,
            "story_text": "Yes, HN should go dark to protest SOPA",
            "comment_text": null,
            "num_comments": null,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": 3454179,
            "created_at_i": 1326323859,
            "relevancy_score": 3685,
            "_tags": [
                "pollopt",
                "author_zitterbewegung",
                "story_3454180"
            ],
            "objectID": "3454180",
            "_highlightResult": {
                "author": {
                    "value": "zitterbewegung",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "story_text": {
                    "value": "Yes, HN should go dark to protest SOPA",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2020-01-21T15:38:22.000Z",
            "title": "Every Google result now looks like an ad",
            "url": "https://twitter.com/craigmod/status/1219644556003565568",
            "author": "cmod",
            "points": 3592,
            "story_text": null,
            "comment_text": null,
            "num_comments": 969,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1579621102,
            "_tags": [
                "story",
                "author_cmod",
                "story_22107823"
            ],
            "objectID": "22107823",
            "_highlightResult": {
                "title": {
                    "value": "Every Google result now looks like an ad",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "url": {
                    "value": "https://twitter.com/craigmod/status/1219644556003565568",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "author": {
                    "value": "cmod",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2011-05-16T15:07:24.000Z",
            "title": null,
            "url": null,
            "author": "robryan",
            "points": 3417,
            "story_text": "All software patents abolished",
            "comment_text": null,
            "num_comments": null,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": 2552740,
            "created_at_i": 1305558444,
            "relevancy_score": 3228,
            "_tags": [
                "pollopt",
                "author_robryan",
                "story_2552741"
            ],
            "objectID": "2552741",
            "_highlightResult": {
                "author": {
                    "value": "robryan",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "story_text": {
                    "value": "All software patents abolished",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2017-12-14T18:13:35.000Z",
            "title": "F.C.C. Repeals Net Neutrality Rules",
            "url": "https://www.nytimes.com/2017/12/14/technology/net-neutrality-repeal-vote.html",
            "author": "panny",
            "points": 3384,
            "story_text": null,
            "comment_text": null,
            "num_comments": 1397,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1513275215,
            "relevancy_score": 7838,
            "_tags": [
                "story",
                "author_panny",
                "story_15924794"
            ],
            "objectID": "15924794",
            "_highlightResult": {
                "title": {
                    "value": "F.C.C. Repeals Net Neutrality Rules",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "url": {
                    "value": "https://www.nytimes.com/2017/12/14/technology/net-neutrality-repeal-vote.html",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "author": {
                    "value": "panny",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2012-03-23T00:40:39.000Z",
            "title": "Show HN: This up votes itself",
            "url": "http://news.ycombinator.com/vote?for=3742902&dir=up&whence=%6e%65%77%65%73%74",
            "author": "olalonde",
            "points": 3381,
            "story_text": "",
            "comment_text": null,
            "num_comments": 83,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1332463239,
            "relevancy_score": 3819,
            "_tags": [
                "story",
                "author_olalonde",
                "story_3742902",
                "show_hn"
            ],
            "objectID": "3742902",
            "_highlightResult": {
                "title": {
                    "value": "Show HN: This up votes itself",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "url": {
                    "value": "http://news.ycombinator.com/vote?for=3742902&dir=up&whence=%6e%65%77%65%73%74",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "author": {
                    "value": "olalonde",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "story_text": {
                    "value": "",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2012-04-02T07:03:58.000Z",
            "title": null,
            "url": null,
            "author": "kamechan",
            "points": 3320,
            "story_text": "OSX",
            "comment_text": null,
            "num_comments": null,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": 3786674,
            "created_at_i": 1333350238,
            "relevancy_score": 3846,
            "_tags": [
                "pollopt",
                "author_kamechan",
                "story_3786675"
            ],
            "objectID": "3786675",
            "_highlightResult": {
                "author": {
                    "value": "kamechan",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "story_text": {
                    "value": "OSX",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2019-05-30T16:09:19.000Z",
            "title": "Switch from Chrome to Firefox",
            "url": "https://www.mozilla.org/en-US/firefox/switch/",
            "author": "WisNorCan",
            "points": 3287,
            "story_text": null,
            "comment_text": null,
            "num_comments": 981,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1559232559,
            "relevancy_score": 8859,
            "_tags": [
                "story",
                "author_WisNorCan",
                "story_20052623"
            ],
            "objectID": "20052623",
            "_highlightResult": {
                "title": {
                    "value": "Switch from Chrome to Firefox",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "url": {
                    "value": "https://www.mozilla.org/en-US/firefox/switch/",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "author": {
                    "value": "WisNorCan",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2020-04-19T21:33:46.000Z",
            "title": "Ask HN: I'm a software engineer going blind, how should I prepare?",
            "url": null,
            "author": "zachrip",
            "points": 3270,
            "story_text": "I&#x27;m a 24 y&#x2F;o full stack engineer (I know some of you are rolling your eyes right now, just highlighting that I have experience on frontend apps as well as backend architecture). I&#x27;ve been working professionally for ~7 years building mostly javascript projects but also some PHP. Two years ago I was diagnosed with a condition called &quot;Usher&#x27;s Syndrome&quot; - characterized by hearing loss, balance issues, and progressive vision loss.<p>I know there are blind software engineers out there. My main questions are:<p>- Are there blind frontend engineers?<p>- What kinds of software engineering lend themselves to someone with limited vision? Backend only?<p>- Besides a screen reader, what are some of the best tools for building software with limited vision?<p>- Does your company employ blind engineers? How well does it work? What kind of engineer are they?<p>I&#x27;m really trying to get ahead of this thing and prepare myself as my vision is degrading rather quickly. I&#x27;m not sure what I can do if I can&#x27;t do SE as I don&#x27;t have any formal education in anything. I&#x27;ve worked really hard to get to where I am and don&#x27;t want it to go to waste.<p>Thank you for any input, and stay safe out there!<p>Edit:<p>Thank you all for your links, suggestions, and moral support, I really appreciate it. Since my diagnosis I&#x27;ve slowly developed a crippling anxiety centered around a feeling that I need to figure out the rest of my life before it&#x27;s too late. I know I shouldn&#x27;t think this way but it is hard not to. I&#x27;m very independent and I feel a pressure to &quot;show up.&quot; I will look into these opportunities mentioned and try to get in touch with some more members of the blind engineering community.",
            "comment_text": null,
            "num_comments": 472,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1587332026,
            "_tags": [
                "story",
                "author_zachrip",
                "story_22918980",
                "ask_hn"
            ],
            "objectID": "22918980",
            "_highlightResult": {
                "title": {
                    "value": "Ask HN: I'm a software engineer going blind, how should I prepare?",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "author": {
                    "value": "zachrip",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "story_text": {
                    "value": "I'm a 24 y/o full stack engineer (I know some of you are rolling your eyes right now, just highlighting that I have experience on frontend apps as well as backend architecture). I've been working professionally for ~7 years building mostly javascript projects but also some PHP. Two years ago I was diagnosed with a condition called &quot;Usher's Syndrome&quot; - characterized by hearing loss, balance issues, and progressive vision loss.<p>I know there are blind software engineers out there. My main questions are:<p>- Are there blind frontend engineers?<p>- What kinds of software engineering lend themselves to someone with limited vision? Backend only?<p>- Besides a screen reader, what are some of the best tools for building software with limited vision?<p>- Does your company employ blind engineers? How well does it work? What kind of engineer are they?<p>I'm really trying to get ahead of this thing and prepare myself as my vision is degrading rather quickly. I'm not sure what I can do if I can't do SE as I don't have any formal education in anything. I've worked really hard to get to where I am and don't want it to go to waste.<p>Thank you for any input, and stay safe out there!<p>Edit:<p>Thank you all for your links, suggestions, and moral support, I really appreciate it. Since my diagnosis I've slowly developed a crippling anxiety centered around a feeling that I need to figure out the rest of my life before it's too late. I know I shouldn't think this way but it is hard not to. I'm very independent and I feel a pressure to &quot;show up.&quot; I will look into these opportunities mentioned and try to get in touch with some more members of the blind engineering community.",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2012-03-23T19:19:37.000Z",
            "title": null,
            "url": null,
            "author": "GreekOphion",
            "points": 3240,
            "story_text": "Python",
            "comment_text": null,
            "num_comments": null,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": 3746692,
            "created_at_i": 1332530377,
            "relevancy_score": 3819,
            "_tags": [
                "pollopt",
                "author_GreekOphion",
                "story_3746718"
            ],
            "objectID": "3746718",
            "_highlightResult": {
                "author": {
                    "value": "GreekOphion",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "story_text": {
                    "value": "Python",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2017-02-23T23:05:08.000Z",
            "title": "Cloudflare Reverse Proxies Are Dumping Uninitialized Memory",
            "url": "https://bugs.chromium.org/p/project-zero/issues/detail?id=1139",
            "author": "tptacek",
            "points": 3238,
            "story_text": null,
            "comment_text": null,
            "num_comments": 992,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1487891108,
            "relevancy_score": 7273,
            "_tags": [
                "story",
                "author_tptacek",
                "story_13718752"
            ],
            "objectID": "13718752",
            "_highlightResult": {
                "title": {
                    "value": "Cloudflare Reverse Proxies Are Dumping Uninitialized Memory",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "url": {
                    "value": "https://bugs.chromium.org/p/project-zero/issues/detail?id=1139",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "author": {
                    "value": "tptacek",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2016-06-24T03:48:57.000Z",
            "title": "UK votes to leave EU",
            "url": "http://www.bbc.co.uk/news/uk-politics-36615028",
            "author": "dmmalam",
            "points": 3125,
            "story_text": null,
            "comment_text": null,
            "num_comments": 2531,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1466740137,
            "relevancy_score": 6802,
            "_tags": [
                "story",
                "author_dmmalam",
                "story_11966167"
            ],
            "objectID": "11966167",
            "_highlightResult": {
                "title": {
                    "value": "UK votes to leave EU",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "url": {
                    "value": "http://www.bbc.co.uk/news/uk-politics-36615028",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "author": {
                    "value": "dmmalam",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2011-07-25T21:27:07.000Z",
            "title": null,
            "url": null,
            "author": "tnorthcutt",
            "points": 3115,
            "story_text": "Yes",
            "comment_text": null,
            "num_comments": null,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": 2804734,
            "created_at_i": 1311629227,
            "relevancy_score": 3361,
            "_tags": [
                "pollopt",
                "author_tnorthcutt",
                "story_2804735"
            ],
            "objectID": "2804735",
            "_highlightResult": {
                "author": {
                    "value": "tnorthcutt",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "story_text": {
                    "value": "Yes",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2014-10-30T11:12:23.000Z",
            "title": "Tim Cook Speaks Up",
            "url": "http://www.businessweek.com/articles/2014-10-30/tim-cook-im-proud-to-be-gay",
            "author": "replicatorblog",
            "points": 3086,
            "story_text": "",
            "comment_text": null,
            "num_comments": 974,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1414667543,
            "relevancy_score": 5646,
            "_tags": [
                "story",
                "author_replicatorblog",
                "story_8532261"
            ],
            "objectID": "8532261",
            "_highlightResult": {
                "title": {
                    "value": "Tim Cook Speaks Up",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "url": {
                    "value": "http://www.businessweek.com/articles/2014-10-30/tim-cook-im-proud-to-be-gay",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "author": {
                    "value": "replicatorblog",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "story_text": {
                    "value": "",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        },
        {
            "created_at": "2012-04-02T08:23:08.000Z",
            "title": null,
            "url": null,
            "author": "michaelkscott",
            "points": 3042,
            "story_text": "10+ years",
            "comment_text": null,
            "num_comments": null,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": 3786926,
            "created_at_i": 1333354988,
            "relevancy_score": 3845,
            "_tags": [
                "pollopt",
                "author_michaelkscott",
                "story_3786932"
            ],
            "objectID": "3786932",
            "_highlightResult": {
                "author": {
                    "value": "michaelkscott",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "story_text": {
                    "value": "10+ years",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        }
    ],
    "nbHits": 21706079,
    "page": 0,
    "nbPages": 50,
    "hitsPerPage": 20,
    "exhaustiveNbHits": true,
    "query": "",
    "params": "advancedSyntax=true&analytics=true&analyticsTags=backend",
    "processingTimeMS": 1
};