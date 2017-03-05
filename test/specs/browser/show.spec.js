
import {
  injectHTML,
  $$
} from '../../helpers/index'

const expect = chai.expect

describe('Riot show/hide', function() {
  it('the show directive works as expected', function() {
    riot.tag('riot-show-tmp', '<p show="{ isVisible }">foo</p><p hide="{ isVisible }">foo</p>')
    injectHTML('<riot-show-tmp></riot-show-tmp>')
    var tag = riot.mount('riot-show-tmp')[0],
      p = $$('p', tag.root)

    expect(p[0].style.display).to.be.equal('none')
    expect(p[1].style.display).to.be.not.equal('none')
    tag.isVisible = true
    tag.update()
    expect(p[0].style.display).to.be.not.equal('none')
    expect(p[1].style.display).to.be.equal('none')
    tag.isVisible = false
    tag.update()
    expect(p[0].style.display).to.be.equal('none')
    expect(p[1].style.display).to.be.not.equal('none')

    // teardown
    riot.unregister('riot-show-tmp')
    tag.unmount()
  })
})