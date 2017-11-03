'use strict';


import v1 from './v1'
import v2 from './v2'
import shopping from './shopping'
import ugc from './ugc'
import bos from './bos'
import eus from './eus'
import promotion from './promotion' 
import member from './member'

export default app => {
    app.use('/v1', v1);
    app.use('/v2', v2);
    app.use('/shopping', shopping);
    app.use('/ugc', ugc);
    app.use('/bos', bos);
    app.use('/eus', eus);
    app.use('/promotion', promotion);
    app.use('/member', member);
}