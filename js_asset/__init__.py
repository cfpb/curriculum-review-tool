from __future__ import absolute_import, unicode_literals


VERSION = (1, 1, 0)
__version__ = '.'.join(map(str, VERSION))


try:
    from js_asset.js import *  # noqa
except ImportError:
    pass
