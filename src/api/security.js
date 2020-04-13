import request from '@/utils/request'

export function updatePwd(user, data) {
  return request({
    url: '/appmgr/user/'+user+'/passwd',
    method: 'POST',
    headers: data
  })
}
