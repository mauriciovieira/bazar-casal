$(document).ready(function() {

      $('.sm_open').on('click', function(){
          var modal = $(this).attr('data-modal');
          var modaloverlaycolor = $(this).attr('data-overlay');
          var modaleffect = $(this).attr('data-effect');
          var modalheader = $(this).attr('data-header');
          var modalheadertype = $(this).attr('data-header-type');
          var modalcontent = $(this).attr('data-content');
          var modaliconside = $(this).attr('data-icons');
          var modalwrappercolor = $(this).attr('data-wrapper-color');

          $('#' + modal).addClass(modaloverlaycolor);
          $('#' + modal + ' .sm_content').addClass(modaleffect);
          $('#' + modal + ' .sm_content .sm_header').html(modalheader);
          $('#' + modal + ' .sm_content .sm_header').addClass(modalheadertype);
          $('#' + modal + ' .sm_content .sm_area_all').html(modalcontent);
          $('#' + modal + ' .sm_icon_menu').addClass(modaliconside);
          $('#' + modal + ' .sm_content').addClass(modalwrappercolor);
          $('#' + modal).fadeIn().css("display", "flex");
          setTimeout(function(){
              $('#'+modal + ' .sm_content').addClass('show');
          }, 400);
      });

      $('.sm_close').on('click', function(){
          var $modal = $(this).parents('.slim_modal');
          closeModal($modal);
      });

      $('.slim_modal').on('click', function(e) {
      if (e.target !== this)
        return;
      var $modal = $(this);
        closeModal($modal);
    });

      function closeModal($modal) {
        $modal.find('.sm_content').removeClass('show');
          setTimeout(function(){
            $modal.removeClass('red green tan none');
            $modal.find('.sm_content').removeClass('red green tan');
            $modal.find('.sm_icon_menu').removeClass('is_right is_left');
            $modal.find('.sm_header').removeClass('detached');
              $modal.fadeOut();
          }, 400);
      }
    });