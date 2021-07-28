<?php
/**
 * Uploading files to dynamically created folder.
 *
 * Must be included in functions.php
 *
 * @package AstraChild
 */

if ( ! defined( 'ABSPATH' ) ) exit;


add_action('wpcf7_before_send_mail', 'file_upload' );
function file_upload( $form_to_DB ) {

    global $wpdb;

    $form_to_DB = WPCF7_Submission::get_instance();

    if ( $form_to_DB ) {

        $formData = $form_to_DB->get_posted_data();
        // access the uploaded file in the temp location
        $uploaded_files = $form_to_DB->uploaded_files();

        // echo $formData;

        $time = /* date("dmY")."".*/time() ;

        if (!empty($formData[Photo])){
            $image_name = $formData[Photo];
            $image_name = $time.".jpg";
        } else {
            $image_name="";
        }

        $image_location = $uploaded_files[Photo];
        $image_content = file_get_contents($image_location);
        $upload = wp_upload_bits($image_name, null, $image_content);
        
        $filename = $image_name;
        $folderPath = "/loan-applications/" . $time. "/attached/";

        mkdir(ABSPATH.$folderPath, 0755, true);   
            

       if ($filename > '') {

            $target_path = ABSPATH . $folderPath . "/"  ;

            move_uploaded_file($image_name, $target_path);

            require(ABSPATH . 'wp-admin/includes/admin.php');

            $wp_filetype = wp_check_filetype(basename($filename), null);

            $attachment = array(
                //'guid'           => $wp_upload_dir['url'] . '' . basename( $filename ),
                'post_mime_type' => $wp_filetype['type'],
                'post_title' => preg_replace('/\.[^.]+$/', '', basename($filename)),
                'post_content' => '',
                'post_status' => 'inherit'
            );

            $attach_id = wp_insert_attachment($attachment, $filename, $newpostid);
            
            require_once(ABSPATH . 'wp-admin/includes/image.php');

            $attach_data = wp_generate_attachment_metadata($attach_id, $filename);

            wp_update_attachment_metadata($attach_id, $attach_data);

            //Define the new Thumbnail can be also a ACF field
            update_post_meta($newpostid, "_thumbnail_id", $attach_id);
        }

        // fetch the submitted form details   
        $mail_tags = $wpcf7_form->prop('mail');
        $mail_fields = wpcf7_mail_replace_tags( $mail_tags );
        $senders_email_address = $mail_fields['sender'];

        // save any attachments to a temp directory
        $mail_string = trim($mail_fields['attachments']);
        
        if(strlen($mail_string) > 0 and !ctype_space($mail_string)) {
            $mail_attachments = explode(" ", $mail_string);
            foreach($mail_attachments as $attachment) {
                $uploaded_file_path = ABSPATH . 'wp-content/uploads/wpcf7_uploads/' . $attachment;
                $new_filepath = WPCF7EV_UPLOADS_DIR . $attachment;
                rename($uploaded_file_path, $new_filepath);
            }
        }
    }
}
